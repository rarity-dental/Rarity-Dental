// app/about/page.tsx (Server Component by default)
import ClientAbout from "./_components/ClientAbout";

export const metadata = {
	title: "About Us",
};

export default function AboutPage() {
	return <ClientAbout />;
}
