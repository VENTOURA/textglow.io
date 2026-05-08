import { useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { examples } from '../data/beforeAfterExamples';

export function useExampleFilters() {
    const [searchParams, setSearchParams] = useSearchParams();

    // Parse filters from URL
    const getListParam = (key: string) => {
        const val = searchParams.get(key);
        return val ? val.split(',') : [];
    };

    const q = searchParams.get('q') || '';
    const contexts = getListParam('context');
    const tones = getListParam('tone');
    const problems = getListParam('problem');
    const sort = searchParams.get('sort') || 'popular';

    const setFilter = useCallback((group: 'context' | 'tone' | 'problem', value: string) => {
        setSearchParams(prev => {
            const nextParams = new URLSearchParams(prev);
            const current = nextParams.get(group) ? nextParams.get(group)!.split(',') : [];
            const updated = current.includes(value) 
                ? current.filter(v => v !== value) 
                : [...current, value];
            
            if (updated.length > 0) {
                nextParams.set(group, updated.join(','));
            } else {
                nextParams.delete(group);
            }
            return nextParams;
        }, { replace: true });
    }, [setSearchParams]);

    const setSearch = useCallback((query: string) => {
        setSearchParams(prev => {
            const nextParams = new URLSearchParams(prev);
            if (query) {
                nextParams.set('q', query);
            } else {
                nextParams.delete('q');
            }
            return nextParams;
        }, { replace: true });
    }, [setSearchParams]);

    const setSort = useCallback((newSort: string) => {
        setSearchParams(prev => {
            const nextParams = new URLSearchParams(prev);
            nextParams.set('sort', newSort);
            return nextParams;
        }, { replace: true });
    }, [setSearchParams]);

    const clearFilters = useCallback(() => {
        setSearchParams(prev => {
            const nextParams = new URLSearchParams(prev);
            nextParams.delete('q');
            nextParams.delete('context');
            nextParams.delete('tone');
            nextParams.delete('problem');
            return nextParams;
        }, { replace: true });
    }, [setSearchParams]);

    const filteredAndSorted = useMemo(() => {
        let result = examples;

        // Filters (AND across groups, OR within groups)
        if (contexts.length > 0) {
            result = result.filter(ex => contexts.includes(ex.context));
        }
        if (tones.length > 0) {
            result = result.filter(ex => tones.includes(ex.tone));
        }
        if (problems.length > 0) {
            result = result.filter(ex => ex.problems.some(p => problems.includes(p)));
        }

        // Search
        if (q.trim()) {
            const query = q.toLowerCase().trim();
            result = result.filter(ex => {
                const searchStr = `${ex.title} ${ex.before} ${ex.after} ${ex.whatChanged.join(' ')} ${ex.context} ${ex.tone} ${ex.category}`.toLowerCase();
                return searchStr.includes(query);
            });
        }

        // Sort
        result = [...result];
        if (sort === 'popular') {
            result.sort((a, b) => b.popularityScore - a.popularityScore);
        } else if (sort === 'newest') {
            result.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
        } else if (sort === 'category') {
            result.sort((a, b) => {
                const catDiff = a.category.localeCompare(b.category);
                if (catDiff !== 0) return catDiff;
                return a.title.localeCompare(b.title);
            });
        }
        return result;
    }, [contexts.join(','), tones.join(','), problems.join(','), q, sort]);

    return {
        q,
        contexts,
        tones,
        problems,
        sort,
        setSearch,
        setFilter,
        setSort,
        clearFilters,
        results: filteredAndSorted
    };
}
