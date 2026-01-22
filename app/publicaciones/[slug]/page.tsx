// app/publicaciones/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ArticleLayout from '@/src/components/publicaciones/ArticleLayout';
import { articles, getArticleBySlug } from '@/src/data/articles';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generar metadata para SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = getArticleBySlug(slug);
    
    if (!article) {
        return {
            title: 'Artículo no encontrado | GESTIUM'
        };
    }

    return {
        title: `${article.title} | GESTIUM`,
        description: article.excerpt,
        authors: [{ name: article.author }],
        openGraph: {
            title: article.title,
            description: article.excerpt,
            images: [
                {
                    url: article.image,
                    width: 1200,
                    height: 630,
                    alt: article.title,
                }
            ],
            type: 'article',
            publishedTime: article.date,
            authors: [article.author],
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.excerpt,
            images: [article.image],
        },
        keywords: article.tags?.join(', '),
    };
}

// Generar rutas estáticas en build time
export async function generateStaticParams() {
    return articles
        .filter(article => article.hasFullArticle)
        .map((article) => ({
            slug: article.slug,
        }));
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    // Si el artículo no existe, mostrar 404
    if (!article) {
        notFound();
    }

    // Si el artículo no tiene contenido web, redirigir al PDF
    if (!article.hasFullArticle) {
        return null;
    }

    return <ArticleLayout article={article} />;
}