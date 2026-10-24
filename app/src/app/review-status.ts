import type { Article, ReviewStage } from './content';

// A review applies only to the named article version. Technical checks are not reviews.
export function reviewStage(article: Article): ReviewStage {
  const revision = article.revision;
  if (revision.status === 'Drafted') return 'Drafted';
  return revision.reviewedVersion === revision.version && revision.reviewer.trim()
    && /^\d{4}-\d{2}-\d{2}$/.test(revision.reviewedOn) && revision.note.trim()
    ? revision.status : 'Drafted';
}
export function reviewStatusLabel(article: Article): string {
  const stage = reviewStage(article);
  return stage === 'Drafted' || stage === 'Editorially Reviewed'
    ? stage + ' · Awaiting theological review' : stage;
}
