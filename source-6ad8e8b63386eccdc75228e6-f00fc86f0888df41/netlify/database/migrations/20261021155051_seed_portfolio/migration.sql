INSERT INTO profiles (id, data) VALUES (1, '{"name":"Ferdous Mahmud","title":"Business Professional | Entrepreneur","tagline":"Turning complexity into clarity","location":"Bangladesh","email":"ferdous.index@gmail.com","aboutHeading":"About Ferdous Mahmud","aboutLead":"Business-minded.\nPeople-focused.","aboutNote":"Always a student.\nAlways moving forward.","heroEyebrow":"A MIND FOR BUSINESS. A HEART FOR PEOPLE.","heroFootnote":"Business. Creativity. Purpose.","skillsHeading":"A practical, versatile skill set.","skillsIntro":"Connecting business know-how with a creative eye and a collaborative spirit.","experienceHeading":"Learning by doing.","experienceIntro":"Practical experiences that shape how I think, solve problems, and work with people.","educationHeading":"Education & growth.","about":"Ferdous Mahmud is an aspiring entrepreneur and business professional with experience in small business operations, product sales, wholesale trading, and business management. He has an interest in problem-solving, data analysis, document-related services, and attention to detail.\n\nFrom 2024 to 2026, he contributed to BD Clean, a volunteer organization focused on environmental awareness and cleanliness. During his journey, he progressed from General Member to Ward Monitor, IT & Media Team Member, and eventually Zonal Sub-Representative. His responsibilities included photography, videography, scriptwriting, video editing, and team coordination.\n\nAlongside his business and volunteer experience, Ferdous has developed creative skills in graphic design and media production. He values continuous learning, practical problem-solving, teamwork, and personal growth.\n\nHis goal is to combine business knowledge, creativity, and leadership to take on new challenges and create meaningful contributions.","imageUrl":"","cvUrl":"","contactHeading":"Let’s make something meaningful.","contactIntro":"Have an opportunity, a project, or an idea in mind? I’d love to hear from you.","communityHeading":"A cleaner city. A stronger community.","communityIntro":"My journey with BD Clean, from showing up as a volunteer to helping teams make a difference. Leadership begins with service.","workHeading":"Practical work. Real purpose.","workIntro":"A look at document-related services and practical problem-solving. All previews are illustrative samples, never personal records."}'::jsonb) ON CONFLICT (id) DO NOTHING;
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('skills','Business operations','Business & operations','','','','',0,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('skills','Product sales','Business & operations','','','','',1,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('skills','Wholesale trading','Business & operations','','','','',2,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('skills','Business management','Business & operations','','','','',3,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('skills','Document recovery','Analysis & services','','','','',4,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('skills','Data analysis','Analysis & services','','','','',5,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('skills','Problem-solving','Analysis & services','','','','',6,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('skills','Attention to detail','Analysis & services','','','','',7,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('skills','Graphic design','Creative & media','','','','',8,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('skills','Photography','Creative & media','','','','',9,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('skills','Videography','Creative & media','','','','',10,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('skills','Scriptwriting','Creative & media','','','','',11,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('skills','Video editing','Creative & media','','','','',12,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('skills','Team coordination','People & leadership','','','','',13,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('skills','Leadership','People & leadership','','','','',14,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('skills','Community service','People & leadership','','','','',15,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('experience','Small business operations','Business & entrepreneurship','Hands-on experience in daily business operations, practical problem-solving, and business management.','','','',16,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('experience','Product sales & wholesale management','Sales & trading','Experience in product sales, wholesale trading, and coordinating business activities.','','','',17,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('experience','Document recovery & data analysis','Document-related services','Supporting document-related tasks through careful information review, attention to detail, and data analysis.','','','',18,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('experience','Microfinance experience','Draft — confirmation required','Add the organization, role, dates, and confirmed responsibilities before publishing.','','','',19,false);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('bdclean','General Member','The beginning','Participated in cleanliness initiatives and environmental awareness activities.','2024–2026','','',20,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('bdclean','Ward Monitor','Taking responsibility','Supported local volunteer activities and coordination.','2024–2026','','',21,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('bdclean','IT & Media Team Member','Telling the story','Photography, videography, scriptwriting, and video editing to document and share community work.','2024–2026','','',22,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('bdclean','Zonal Sub-Representative','Leading together','Team coordination, volunteer leadership, and community service responsibilities.','2024–2026','','',23,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('education','Higher Secondary Certificate','Duaripara Government College','GPA 3.75','2024','','',24,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('education','Secondary School Certificate','Bangladesh Adarsha Shikkha Niketon','GPA 4.00','2022','','',25,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('languages','Bangla','Native','','','','',26,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('languages','English','Intermediate','','','','',27,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('languages','Hindi','Conversational understanding','Limited reading ability.','','','',28,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('certifications','Graphic Design','Certificate pending upload','Certificate details will be added after the document is uploaded. No issuer has been specified.','','','',29,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('work','Birth certificate recovery','Document services','An illustrative workflow for organizing information and supporting a birth certificate recovery request. No real personal document is displayed.','','','',30,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('work','Death certificate recovery','Document services','A sample document recovery workflow focused on careful record review. No real personal document is displayed.','','','',31,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('work','Marriage certificate recovery','Document services','An illustrative document recovery example with a focus on accuracy and clear information. No real personal document is displayed.','','','',32,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('social','LinkedIn','','','','','',33,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('social','Facebook','','','','','',34,true);
--> statement-breakpoint
INSERT INTO items (section,title,subtitle,description,period,image_url,link_url,position,published) VALUES ('social','Instagram','','','','','',35,true);