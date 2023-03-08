
export default function Header() {
   return (
      <div className="header">
         <h1>
            Hello, UI Engineer! 
         </h1>

         <p className="subheader">
            There is a prototype below. Please try to build a web page to implement this prototype with responsive layout and interactive effects.
         </p>

         <p className="header-text">
            There is no presupposed responsive adaptive design strategy for this prototype. The interactive animations/effects of this prototype is technology agnostic. Hence, any reasonable solutions are welcome.
            <br/>
            Any royalty-free/open-source resources (icons, fonts, patterns, etc.) can be used as alternates in your jobs. Have fun!          
         </p>

         <img className="grid" src="/img/grid1.png" alt="grid" />
      </div>
   )
}