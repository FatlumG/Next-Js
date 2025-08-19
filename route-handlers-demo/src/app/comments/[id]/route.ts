import { comments } from "../data";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = comments.find((c) => c.id === parseInt(id));
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const { text } = await body;

  const index = comments.findIndex((c) => c.id === parseInt(id));
  comments[index].text = text;
  return Response.json(index);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const index = comments.findIndex((c) => c.id === parseInt(id));
  const deletedComment = comments[index];
  comments.slice(index, 1);

  return Response.json(deletedComment);
}
