import { Cover } from "components/Cover/Cover";

export const BlockRendrer = ({blocks}) =>{
    return  blocks.map(block => {
        switch(block.name){
            case "core/cover":{
                return <Cover key={block.id} background={block.attributes.url}>cover</Cover>
            }
            default:{
                return null;
            }
        }
    });
}