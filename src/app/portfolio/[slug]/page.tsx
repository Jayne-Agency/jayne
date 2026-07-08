import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolioClients } from "../portfolio-data";
import { ClientGallery } from "./ClientGallery";

export function generateStaticParams() {
  return portfolioClients.map((client) => ({ slug: client.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const client = portfolioClients.find((c) => c.slug === slug);
  if (!client) return {};
  return {
    title: `${client.client} Portfolio`,
    description: client.description,
    openGraph: {
      title: `${client.client} Portfolio | Jayne Agency`,
      description: client.description,
    },
  };
}

export default async function PortfolioClientPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const client = portfolioClients.find((c) => c.slug === slug);
  if (!client) notFound();

  return <ClientGallery client={client} />;
}
