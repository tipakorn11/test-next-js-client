import NextLayout from "./container/layout"
import './style'
export const metadata = {
  title: "Rising Maintenance",
  description: "Rising Maintenance wep application for maintenance and recheck the engine",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-0 m-0">
        <NextLayout>{children}</NextLayout>
      </body>
    </html>
  )
}
