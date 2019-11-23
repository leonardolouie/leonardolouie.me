import React from 'react'

export default function hero() {
  return (
    <div className="flex flex-col sm:my-40 text-center items-center">
      <h1 className="text-dim  mb-2 text-3xl sm:text-4xl">Software Enginer + Rockstar Coder</h1>
      <div className="mx-auto ">
        <p className="text-dim mb-5">
          Hi mate ! <span className="text-white">I' m Leonardo Louie Ordonez</span>, consectetur adipiscing elit. Etiam
          eleifend elit nec ante efficitur pretium. Aenean auctor, velit non auctor sollicitudin, sem augue commodo leo,
          ac dictum ex enim ut diam. eleifend elit nec ante efficitur pretium. Aenean auctor, velit non auctor
          sollicitudin, sem augue commodo leo, ac dictum ex enim ut diam. Hi mate !
        </p>
        <button
          className="bg-white hover:bg-dim text-primary font-bold py-2 px-4 rounded-full"
          onClick={() => {
            this.myInp.focus()
          }}
        >
          See my project
        </button>
      </div>
    </div>
  )
}
