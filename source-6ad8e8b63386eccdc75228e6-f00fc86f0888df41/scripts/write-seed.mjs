import fs from 'node:fs';
import {defaultProfile,defaultItems} from '../lib/content.ts';
const root='netlify/database/migrations';
const folder=fs.readdirSync(root).find(v=>v.endsWith('_seed_portfolio'));
if(!folder)throw new Error('Generate the custom seed migration first.');
const q=v=>`'${String(v).replaceAll("'","''")}'`;
const lines=[`INSERT INTO profiles (id, data) VALUES (1, ${q(JSON.stringify(defaultProfile))}::jsonb) ON CONFLICT (id) DO NOTHING;`];
for(const item of defaultItems){lines.push(`INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES (${[item.section,item.title,item.subtitle,item.description,item.period,item.imageUrl,item.linkUrl].map(q).join(',')},${item.position},${item.published});`);}
fs.writeFileSync(`${root}/${folder}/migration.sql`,lines.join('\n--> statement-breakpoint\n'));
