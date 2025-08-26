import { useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams();
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Project Detail Page</h1>
      <p>You are viewing project with ID: {id}</p>
    </div>
  );
}
