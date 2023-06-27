
const portal = 'https://cdn.dribbble.com/userupload/3639554/file/original-0d3aed1adc785c0d6ccf6c7e91584fd9.png?compress=1&resize=400x300&vertical=center'
export const useStyles = {
  root: {
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    lineHeight: 1.5,
    fontWeight: 400,
    colorScheme: "light dark",
    color: "rgba(255, 255, 255, 0.87)",
    backgroundColor: "#242424",
    fontSynthesis: "none",
    textRendering: "optimizeLegibility",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
     WebkitTextSizeAdjust: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    backgroundImage: `url(${portal})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: 0,
    placeItems: "center",
    minWidth: 320,
    minHeight: "50vh",
    borderRadius: '4%',
  },
  h1: {
    fontSize: "3.2em",
    lineHeight: "1.1",
    alignText: "center",
    alignSelf:"center"
  },
  cardsContainer: {
   flex:1,
  },
  cards:{
    
   flex:1,
    opacity:0.8,
    margin:2,
     width: 300,
     padding:0
  },
  loading:{
    alignSelf:"center",
    marginBottom:5,
    flex:"auto"
  }
};
