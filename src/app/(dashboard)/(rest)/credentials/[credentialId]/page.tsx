interface PageProps {
  params: Promise<{ credentialId: string }>;
}

const Page = async ({ params }: PageProps) => {
    const credentialId = (await params).credentialId;
  return <h1>Credential ID: {credentialId}</h1>;
};

export default Page;
