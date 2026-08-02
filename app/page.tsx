import { redirect } from "next/navigation"

// The deliverable is the standalone static file at /public/index.html.
// The root route simply serves it so the preview shows the site.
export default function Page() {
  redirect("/index.html")
}
