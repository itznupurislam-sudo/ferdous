import { z } from 'zod';
export const sections = ['skills','experience','bdclean','education','languages','certifications','work','social'] as const;
export type Section = typeof sections[number];
export const labels: Record<Section,string> = {skills:'Skills',experience:'Experience',bdclean:'BD Clean',education:'Education',languages:'Languages',certifications:'Certifications',work:'My Work',social:'Social links'};
const safeUrl = z.string().max(1000).refine(v => !v || /^https:\/\//.test(v) || /^\/api\/media\?key=[a-zA-Z0-9.%_-]+$/.test(v), 'Use an HTTPS URL or an uploaded file.');
const imageUrl = z.union([safeUrl,z.enum(['/images/ferdous-mahmud-portrait.webp','/images/birth-certificate.png','/images/death-certificate.png','/images/marriage-certificate.png'])]);
export const profileSchema = z.object({
 name:z.string().trim().min(1).max(100),title:z.string().trim().min(1).max(160),tagline:z.string().trim().min(1).max(200),
 location:z.string().trim().max(120),email:z.email().max(200),aboutHeading:z.string().trim().min(1).max(160),
 aboutLead:z.string().max(300),aboutNote:z.string().max(300),heroEyebrow:z.string().max(250),heroFootnote:z.string().max(250),
 skillsHeading:z.string().trim().min(1).max(160),skillsIntro:z.string().max(1500),experienceHeading:z.string().trim().min(1).max(160),experienceIntro:z.string().max(1500),educationHeading:z.string().trim().min(1).max(160),
 about:z.string().trim().min(1).max(12000),imageUrl,cvUrl:safeUrl,
 contactHeading:z.string().trim().min(1).max(160),contactIntro:z.string().max(1500),
 communityHeading:z.string().trim().min(1).max(160),communityIntro:z.string().max(2000),
 workHeading:z.string().trim().min(1).max(160),workIntro:z.string().max(2000),
});
export type Profile=z.infer<typeof profileSchema>;
export const itemSchema=z.object({id:z.uuid().optional(),section:z.enum(sections),title:z.string().trim().min(1).max(180),subtitle:z.string().max(250),description:z.string().max(6000),period:z.string().max(100),imageUrl,linkUrl:safeUrl,position:z.number().int().min(0).max(10000),published:z.boolean()});
export type Item=z.infer<typeof itemSchema> & {id:string};
export type Content={profile:Profile;items:Item[]};
export const contactSchema=z.object({name:z.string().trim().min(2,'Please enter your name.').max(100),email:z.email('Please enter a valid email.').max(200),message:z.string().trim().min(10,'Please write at least 10 characters.').max(5000),website:z.string().max(0).optional()});
export const defaultProfile:Profile={
 name:'Ferdous Mahmud',title:'Business Professional | Entrepreneur',tagline:'Turning complexity into clarity',location:'Bangladesh',email:'ferdous.index@gmail.com',aboutHeading:'About Ferdous Mahmud',
 aboutLead:'Business-minded.\nPeople-focused.',aboutNote:'Always a student.\nAlways moving forward.',heroEyebrow:'A MIND FOR BUSINESS. A HEART FOR PEOPLE.',heroFootnote:'Business. Creativity. Purpose.',skillsHeading:'A practical, versatile skill set.',skillsIntro:'Connecting business know-how with a creative eye and a collaborative spirit.',experienceHeading:'Learning by doing.',experienceIntro:'Practical experiences that shape how I think, solve problems, and work with people.',educationHeading:'Education & growth.',
 about:`Ferdous Mahmud is an aspiring entrepreneur and business professional with experience in small business operations, product sales, wholesale trading, and business management. He has an interest in problem-solving, data analysis, document-related services, and attention to detail.

From 2024 to 2026, he contributed to BD Clean, a volunteer organization focused on environmental awareness and cleanliness. During his journey, he progressed from General Member to Ward Monitor, IT & Media Team Member, and eventually Zonal Sub-Representative. His responsibilities included photography, videography, scriptwriting, video editing, and team coordination.

Alongside his business and volunteer experience, Ferdous has developed creative skills in graphic design and media production. He values continuous learning, practical problem-solving, teamwork, and personal growth.

His goal is to combine business knowledge, creativity, and leadership to take on new challenges and create meaningful contributions.`,
 imageUrl:'/images/ferdous-mahmud-portrait.webp',cvUrl:'',contactHeading:'Let’s make something meaningful.',contactIntro:'Have an opportunity, a project, or an idea in mind? I’d love to hear from you.',communityHeading:'A cleaner city. A stronger community.',communityIntro:'My journey with BD Clean, from showing up as a volunteer to helping teams make a difference. Leadership begins with service.',workHeading:'Practical work. Real purpose.',workIntro:'A look at document-related services and practical problem-solving, with birth, death, and marriage certificate previews.'
};
function entry(section:Section,title:string,subtitle='',description='',period='',published=true):Omit<Item,'id'>{return {section,title,subtitle,description,period,published,imageUrl:'',linkUrl:'',position:0};}
export const defaultItems:Omit<Item,'id'>[]=[
 ...['Business operations','Product sales','Wholesale trading','Business management'].map(t=>entry('skills',t,'Business & operations')),
 ...['Document recovery','Data analysis','Problem-solving','Attention to detail'].map(t=>entry('skills',t,'Analysis & services')),
 ...['Graphic design','Photography','Videography','Scriptwriting','Video editing'].map(t=>entry('skills',t,'Creative & media')),
 ...['Team coordination','Leadership','Community service'].map(t=>entry('skills',t,'People & leadership')),
 entry('experience','Small business operations','Business & entrepreneurship','Hands-on experience in daily business operations, practical problem-solving, and business management.'),
 entry('experience','Product sales & wholesale management','Sales & trading','Experience in product sales, wholesale trading, and coordinating business activities.'),
 entry('experience','Document recovery & data analysis','Document-related services','Supporting document-related tasks through careful information review, attention to detail, and data analysis.'),
 entry('experience','Microfinance experience','Draft — confirmation required','Add the organization, role, dates, and confirmed responsibilities before publishing.','',false),
 entry('bdclean','General Member','The beginning','Participated in cleanliness initiatives and environmental awareness activities.','2024–2026'),
 entry('bdclean','Ward Monitor','Taking responsibility','Supported local volunteer activities and coordination.','2024–2026'),
 entry('bdclean','IT & Media Team Member','Telling the story','Photography, videography, scriptwriting, and video editing to document and share community work.','2024–2026'),
 entry('bdclean','Zonal Sub-Representative','Leading together','Team coordination, volunteer leadership, and community service responsibilities.','2024–2026'),
 entry('education','Higher Secondary Certificate','Duaripara Government College','GPA 3.75','2024'),
 entry('education','Secondary School Certificate','Bangladesh Adarsha Shikkha Niketon','GPA 4.00','2022'),
 entry('languages','Bangla','Native'),entry('languages','English','Intermediate'),entry('languages','Hindi','Conversational understanding','Limited reading ability.'),
 entry('certifications','Graphic Design','Certificate pending upload','Certificate details will be added after the document is uploaded. No issuer has been specified.'),
 entry('work','Birth certificate recovery','Document services','Birth certificate document preview.'),
 entry('work','Death certificate recovery','Document services','Death certificate document preview.'),
 entry('work','Marriage certificate recovery','Document services','Marriage certificate document preview.'),
 entry('social','LinkedIn'),entry('social','Facebook'),entry('social','Instagram'),
].map((r,position)=>({...r,position,...(r.section==='work'&&['Birth certificate recovery','Death certificate recovery','Marriage certificate recovery'].includes(r.title)?{imageUrl:`/images/${r.title.split(' ')[0].toLowerCase()}-certificate.png`}:{})}));
