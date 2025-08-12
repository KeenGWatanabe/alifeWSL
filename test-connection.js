// test-connection.js
import clientPromise from "@/lib/mongodb"

async function test() {
  try {
    const client = await clientPromise
    await client.db().command({ ping: 1 })
    console.log("✅ MongoDB connected")
  } catch (e) {
    console.error("❌ MongoDB connection failed", e)
  }
}
test()