const LadingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full overflow-auto bg-slate-900">
      <div className="mx-auto h-full w-full max-w-screen-xl">{children}</div>
    </main>
  )
}
export default LadingLayout
