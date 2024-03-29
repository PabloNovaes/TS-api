import { db } from "@/infra/prisma/Client";

db.user.deleteMany({}).then(res => console.log(res))