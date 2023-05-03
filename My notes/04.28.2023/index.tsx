import React, {useContext} from 'react';
import { ThemeContext, PodcastContext } from './create_context';
 

const App = () => {

    const theme = useContext(ThemeContext);
    const podcast = useContext(PodcastContext);

return (
<div className={`card ${podcast}`}>
    <item label="Podcast">
        <h4>
{podcast}
        </h4>
    </item>
</div>
)
}
console.log(App)

export default App;