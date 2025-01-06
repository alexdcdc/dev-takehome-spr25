import clientPromise from "@/lib/mongo/mongoose";
import RequestModel, { IRequest } from "@/lib/mongo/models/request.model";

export default async function PUT(request: Request) {
    await clientPromise;
}