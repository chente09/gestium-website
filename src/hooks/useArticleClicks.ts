// src/hooks/useArticleClicks.ts
'use client';

import { useState, useEffect, useCallback } from 'react';
import { createClient } from '../lib/supabase/client';


interface ClickCounts {
    [articleId: string]: number;
}

// ✅ Agregamos el tipo para item
interface ArticleClickData {
    article_id: string;
    click_count: number;
}

export function useArticleClicks() {
    const [clickCounts, setClickCounts] = useState<ClickCounts>({});
    const [loading, setLoading] = useState(true);
    const supabase = createClient();

    const loadClickCounts = useCallback(async () => {
        try {
            const { data, error } = await supabase
                .from('article_clicks')
                .select('article_id, click_count');

            if (error) throw error;

            const counts: ClickCounts = {};
            // ✅ Tipado explícito aquí
            data?.forEach((item: ArticleClickData) => {
                counts[item.article_id] = item.click_count || 0;
            });

            setClickCounts(counts);
        } catch (error) {
            console.error('Error loading click counts:', error);
        } finally {
            setLoading(false);
        }
    }, [supabase]);

    useEffect(() => {
        loadClickCounts();
    }, [loadClickCounts]);

    const incrementClick = async (articleId: string, articleTitle: string) => {
        try {
            const { data: existing } = await supabase
                .from('article_clicks')
                .select('click_count')
                .eq('article_id', articleId)
                .single();

            const newCount = (existing?.click_count || 0) + 1;

            const { error } = await supabase
                .from('article_clicks')
                .upsert({
                    article_id: articleId,
                    article_title: articleTitle,
                    click_count: newCount,
                    last_clicked_at: new Date().toISOString()
                });

            if (error) throw error;

            setClickCounts(prev => ({
                ...prev,
                [articleId]: newCount
            }));

            return newCount;
        } catch (error) {
            console.error('Error incrementing click:', error);
            return null;
        }
    };

    return {
        clickCounts,
        loading,
        incrementClick,
        refreshCounts: loadClickCounts
    };
}