export const demoFolders=[
  {id:'demo-biarritz',name:'Biarritz · été 2026',position:0},
  {id:'demo-espagne',name:'Espagne · escapade',position:1},
  {id:'demo-alpes',name:'Les Alpes · hiver',position:2},
];
const placeholder=(folderId:string,entries:string[])=>entries.map((name,index)=>({id:`${folderId}-${index+1}`,name,url:`https://picsum.photos/seed/${folderId}-${index+1}/1600/1100`,size:560000+index*12000,type:'image/jpeg',folderId}));
export const demoPhotos=[
  ...placeholder('demo-biarritz',['Premier bain de soleil','La grande plage','Entre deux vagues','Les cabanes colorées','Le phare au loin','Un peu de vent','Fin de journée sur la côte','Les pieds dans le sable','Un café face à l’océan','La promenade du soir','L’océan sans filtre','Dernières lumières']),
  ...placeholder('demo-espagne',['Matin à Séville','Une rue qui danse','Les oranges du marché','À l’ombre des façades','Pause tapas','Le bleu de l’après-midi','Un balcon fleuri','Une table pour deux','L’heure dorée','Place encore calme','Un détour par hasard','Le voyage continue']),
  ...placeholder('demo-alpes',['Le départ du refuge','Silence sur le lac','Premier sommet','L’air est plus frais ici','Chemin de traverse','Une pause en altitude','Neige sur les crêtes','Le petit chalet','Vue à couper le souffle','La vallée sous nos pieds','Retour à la lumière','Dernier regard avant de partir']),
];
