import { NavigationContainer } from "@react-navigation/native"
import Navigation from "./src/Navigation/Navigation"
import * as eva from "@eva-design/eva"
import { ApplicationProvider } from "@ui-kitten/components"


const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ApplicationProvider>
  )
}

export default App