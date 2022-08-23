import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext()

const navbar = {
    dark:{
        backgroundColor:"#121A2F",
        color:"red"
    },
    light:{
        backgroundColor:"#E2F0EA",
        color:"#333333"
    }
}



const heroheading = {
    dark:{
        backgroundColor:"#121A2F",
        color:"#F5F5F5"
    },

    light:{
        backgroundColor:"#E2F0EA",
        color:"#426362"
    }
}

const hero = {
    dark:{
        backgroundColor:"#121A2F",
        color:"white"
    },

    light:{
        backgroundColor:"#E2F0EA",
        color:"#333333"
    }
}

const herobutton = {
    dark:{
        backgroundColor:"#121A2F",
        color:"white"
    },
    light:{
        backgroundColor:"#E2F0EA",
        color:"#426362"
    }
    
}

const decovrez = {
    dark:{
        backgroundColor:"#426362",
        color:"#F5F5F5"
    },
    light:{
        backgroundColor:"#121A2F",
        color:"#F5F5F5"
    }
    
}

const redusons = {
    dark:{
        backgroundColor:"#121A2F",
        color:"#F5F5F5"
    },
    light:{
        backgroundColor:"#F5F5F5",
        color:"#333333"
    }
}


const news = {
    dark:{
        backgroundColor:"#6A9488",
        color:"#F5F5F5"
    },
    light:{
        backgroundColor:"#121A2F",
        color:"#F5F5F5F"
    }
}

const newsinput = {
    dark:{
        backgroundColor:"#6A9488",
        color:"#F5F5F5"
    },
    light:{
        backgroundColor:"#121A2F",
        color:"#F5F5F5F"
    }
}

const application = {
    dark:{
        backgroundColor:"#121A2F",
        color:"#F5F5F5"
    },
    light:{
        backgroundColor:"#E2F0EA",
        color:"#333333"
    }
}


export const ThemeProvider = ({children})=>{
   
    const[isDark, setIsDark]=useState(false)

    const navbartheme = isDark ? navbar.dark : navbar.light;
    const theme = isDark ? hero.dark : hero.light;
    const herob = isDark ? herobutton.dark : herobutton.light;
    const herohead = isDark ? heroheading.dark : heroheading.light 
    const decov = isDark ? decovrez.dark : decovrez.light;
    const redu = isDark ? redusons.dark : redusons.light;
    const newze = isDark ? news.dark : news.light;
    const newzi = isDark ? newsinput.dark : newsinput.light;
    const appli = isDark ? application.dark : application.light;
 


    const toggleTheme = ()=>{
        localStorage.setItem("isDark",JSON.stringify(!isDark))
        setIsDark(!isDark)
    }

    useEffect(()=>{
        const isDark = localStorage.getItem("isDark") === "true"
        setIsDark(isDark)
    },[])

    return (
        <ThemeContext.Provider value={[{navbartheme, theme, herob, herohead, decov, redu, newze, newzi, appli, isDark}, toggleTheme]}>{children}</ThemeContext.Provider>
    )
}