interface PageProps {
  params: Promise<{ workflowId: string }>;
}

const Page = async ({ params }: PageProps) => {
  const workflowId = (await params).workflowId;
  return <h1>Workflow ID: {workflowId}</h1>;
};

export default Page;
