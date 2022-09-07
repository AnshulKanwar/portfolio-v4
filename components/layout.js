const Layout = ({ children }) => {
  return (
    <div className=" bg-[#CCD0D9] text-[#2B3853]">
      <div className="min-h-screen grid grid-cols-[1fr_2fr] py-20">
        {children}
      </div>
    </div>
  )
}

export default Layout