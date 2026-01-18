import { supabase } from '@/lib/supabaseClient';

export interface Article {
    id: string;
    title: string;
    url?: string; // Original source URL
    summary: string; // or content
    category: string;
    image_url: string | null;
    image_prompt: string | null;
    source: string;
    published_at: string;
    legitimacy_score: any;
    // mapped properties for UI if needed
}

export async function fetchArticles(category: string, limit = 10): Promise<Article[]> {
    const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('category', category)
        .order('published_at', { ascending: false })
        .limit(limit);

    if (error) {
        console.error(`Error fetching articles for ${category}:`, error);
        return [];
    }

    return data || [];
}

export async function fetchLatestArticles(limit = 20): Promise<Article[]> {
    const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('published_at', { ascending: false })
        .limit(limit);

    if (error) {
        console.error('Error fetching latest articles:', error);
        return [];
    }
    return data || [];
}
