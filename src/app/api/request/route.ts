import RequestModel from "@/lib/mongo/models/request.model";
import { ServerResponseBuilder } from "@/lib/builders/serverResponseBuilder";
import { ResponseType } from "@/lib/types/apiResponse";
import dbConnect from "@/lib/mongo/dbConnect";
import paginate from "@/lib/utils/pagination";
import { PAGINATION_PAGE_SIZE } from "@/lib/constants/config";
import { RequestStatus } from "@/lib/types/request";

export async function PUT(request: Request) {
    await dbConnect();
    const data = await request.json();

    try {
        const newRequest = new RequestModel({
            requestorName: data.requestorName,
            itemRequested: data.itemRequested,
        });
    
        await newRequest.save();

        return new Response(JSON.stringify(newRequest), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    }

    catch (e) {
        if (e instanceof Error && e.name === "ValidationError") {
            return new ServerResponseBuilder(ResponseType.INVALID_INPUT).build();
        }
        
        return new ServerResponseBuilder(ResponseType.UNKNOWN_ERROR).build();
    }

    
}

export async function GET(request: Request) {
    await dbConnect();
    const pageParam = new URL(request.url).searchParams.get("page") || "1"
    const page = parseInt(pageParam);
    const status = new URL(request.url).searchParams.get("status");

    const sortedRequests = (await RequestModel.find({}).sort({ createdDate: -1 }))
    let filteredRequests = sortedRequests;
    if (status) {
        if (!Object.values(RequestStatus).includes(status as RequestStatus)) {
            return new ServerResponseBuilder(ResponseType.INVALID_INPUT).build();
        }
        filteredRequests = filteredRequests.filter((request) => request.status === status);
    }
    

    if (isNaN(page)) {
        return new ServerResponseBuilder(ResponseType.INVALID_INPUT).build();
    }

    const paginatedRequests = paginate(filteredRequests, page, PAGINATION_PAGE_SIZE)

    return new Response(JSON.stringify(paginatedRequests), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}

export async function PATCH(request: Request) {
    await dbConnect();
    const data = await request.json();
    const { id, status } = data;
    if (!id || !status) {
        return new ServerResponseBuilder(ResponseType.INVALID_INPUT).build();
    }

    if (!Object.values(RequestStatus).includes(status as RequestStatus)) {
        return new ServerResponseBuilder(ResponseType.INVALID_INPUT).build();
    }

    try {
        const requestToUpdate = await RequestModel.findById(id);

        if (!requestToUpdate) {
            return new ServerResponseBuilder(ResponseType.NOT_FOUND).build();
        }

        requestToUpdate.status = status;
        requestToUpdate.lastEditedDate = Date.now();
        await requestToUpdate.save();

        return new Response(JSON.stringify(requestToUpdate), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    }

    catch (e) {
        if (e instanceof Error && e.name === "CastError") {
            return new ServerResponseBuilder(ResponseType.INVALID_INPUT).build();
        }
        return new ServerResponseBuilder(ResponseType.UNKNOWN_ERROR).build();
    }
    
}