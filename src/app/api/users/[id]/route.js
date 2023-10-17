import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(request, content) {
      const userData = user.filter((items) => items.id == content.params.id);
      return NextResponse.json(userData.length == 0 ?
            { result: "No data found", success: false } :
            { result: userData[0], success: true });
}

export async function PUT(request , content)
{
      const payload = await request.json();
      payload.id = content.params.id;
      if (!payload.name || !payload.age || !payload.email ) {
            return NextResponse.json({result:"request data is not valid",success:false},{status:400})
      }
      return NextResponse.json({result:payload,success:true},{status:200})


}


export async function DELETE(request , content){
      let id = content.params.id;
      if(id){
            return NextResponse.json({result:"user delete",success:true},{status:200})
      }
      else{
            return NextResponse.json({result:"no such user exist",success:false},{status:400})
      }
}