export const Logo = () => (
  <div className="h-12 w-12 sm:w-18 sm:h-18 overflow-hidden relative mr-2 sm:mr-3 group">
    <div className="bg-themeOrange group-hover:bg-themeGreen w-8 h-8 sm:w-12 sm:h-12 rounded-tl-xl z-10 absolute transition-colors duration-300" />
    <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-tl-xl bg-[#801f2c] z-20 absolute top-4 left-4 sm:top-6 sm:left-6" />
    <div className="bg-themeGreen group-hover:bg-themeOrange w-8 h-8 sm:w-12 sm:h-12 rounded-tl-xl z-0 absolute top-4 left-4 sm:top-6 sm:left-6 transition-colors duration-300" />
  </div>
)
