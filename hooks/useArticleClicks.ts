// hooks/useArticleClicks.ts
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

// Definir tipos
interface ClickCounts {
    [articleId: string]: number;
}

interface UseArticleClicksReturn {
    clickCounts: ClickCounts;
    loading: boolean;
    incrementClick: (articleId: string, articleTitle: string) => Promise<number>;
}

export const useArticleClicks = (): UseArticleClicksReturn => {
    const [clickCounts, setClickCounts] = useState<ClickCounts>({});
    const [loading, setLoading] = useState<boolean>(true);

    // Cargar contadores al inicializar
    useEffect(() => {
        loadClickCounts();
    }, []);

    const loadClickCounts = async () => {
        try {
            const { data, error } = await supabase
                .from('article_clicks')
                .select('article_id, click_count');

            if (error) {
                console.error('Error loading clicks:', {
                    message: error.message,
                    details: error.details,
                    hint: error.hint,
                    code: error.code
                });
                return;
            }

            // Convertir a objeto para fácil acceso
            const counts: ClickCounts = {};
            data.forEach(item => {
                counts[item.article_id] = item.click_count;
            });

            setClickCounts(counts);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const incrementClick = async (articleId: string, articleTitle: string): Promise<number> => {
        try {
            console.log('🚀 Calling increment_click with:', { articleId, articleTitle });

            // Llamar a la función de PostgreSQL
            const { data, error } = await supabase
                .rpc('increment_click', {
                    p_article_id: articleId,
                    p_article_title: articleTitle
                });

            console.log('📊 Supabase response:', { data, error });

            if (error) {
                console.error('❌ Error details:', {
                    message: error.message,
                    details: error.details,
                    hint: error.hint,
                    code: error.code
                });
                return clickCounts[articleId] || 0;
            }

            console.log('✅ Success! New count:', data);

            // Actualizar estado local
            setClickCounts(prev => ({
                ...prev,
                [articleId]: data
            }));

            return data;
        } catch (error) {
            console.error('💥 Catch error:', error);
            return clickCounts[articleId] || 0;
        }
    };

    return {
        clickCounts,
        loading,
        incrementClick
    };
};