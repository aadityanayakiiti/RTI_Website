import Header from "@/components/layout/Header"; // Import the new Header
import Footer from "@/components/layout/Footer"; // Import the new Footer

export default function PublicLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}