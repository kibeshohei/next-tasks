import { TaskDocument, TaskModel } from "@/src/models/task";
import { connectDb } from "@/src/utils/database";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDb();
    const currentDate = new Date()
      .toLocaleDateString("jp-JP", {
        year: `numeric`,
        month: `2-digit`,
        day: `2-digit`,
      })
      .replace(/\//g, "-");
    const expiredTasks: TaskDocument[] = await TaskModel.find({
      dueDate: { $lt: currentDate },
      isCompleted: false,
    });

    return NextResponse.json({
      message: "タスク取得成功",
      tasks: expiredTasks,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "タスク取得失敗" }, { status: 500 });
  }
};

export const dynamic = "force-dynamic";
