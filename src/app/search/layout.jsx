import SearchHeader from "@/components/SearchHeader";

export default function SearchLayout({ children }) {
  return (
    <>
      <SearchHeader />
      {children}
    </>
  );
}
