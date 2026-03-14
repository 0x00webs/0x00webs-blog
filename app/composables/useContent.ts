import type { Article, Project } from '~/types/content'
import { ArticleSchema, ProjectSchema } from '~/types/content'

const parseArticles = (raw: unknown): Article[] => {
  const parsed = ArticleSchema.array().safeParse(raw)
  if (!parsed.success) {
    console.warn('Content parsing failure (articles)', parsed.error)
    return []
  }
  return parsed.data
}

const parseProjects = (raw: unknown): Project[] => {
  const parsed = ProjectSchema.array().safeParse(raw)
  if (!parsed.success) {
    console.warn('Content parsing failure (projects)', parsed.error)
    return []
  }
  return parsed.data
}

export async function getLatestArticles(limit = 3) {
  const raw = await queryCollection<Article>('articles').order('date', 'DESC').limit(limit).all()
  return parseArticles(raw)
}

export async function getAllArticles() {
  const raw = await queryCollection<Article>('articles').order('date', 'DESC').all()
  return parseArticles(raw)
}

export async function getArticleBySlug(slug: string) {
  const raw = await queryCollection('articles').path(`/articles/${slug}`).first()
  if (!raw) return null
  const parsed = ArticleSchema.safeParse(raw)
  if (!parsed.success) {
    console.warn('Content parsing failure (article)', parsed.error)
    return null
  }
  return parsed.data
}

export async function getProjects() {
  const raw = await queryCollection<Project>('projects').order('date', 'DESC').all()
  return parseProjects(raw)
}
