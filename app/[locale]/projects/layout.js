import { alternates } from '../../../lib/seo';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return { alternates: alternates(locale, 'projects') };
}

export default function ProjectsLayout({ children }) {
  return children;
}
