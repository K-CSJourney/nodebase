interface PageProps {
  params: Promise<{ executionId: string }>;
}

const Page = async ({ params }: PageProps) => {
    const executionId = (await params).executionId;
  return <h1>Execution ID: {executionId}</h1>;
};

export default Page;
