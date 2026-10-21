UPDATE items SET image_url = '/images/birth-certificate.png', description = 'Birth certificate document preview.' WHERE section = 'work' AND title = 'Birth certificate recovery';
--> statement-breakpoint
UPDATE items SET image_url = '/images/death-certificate.png', description = 'Death certificate document preview.' WHERE section = 'work' AND title = 'Death certificate recovery';
--> statement-breakpoint
UPDATE items SET image_url = '/images/marriage-certificate.png', description = 'Marriage certificate document preview.' WHERE section = 'work' AND title = 'Marriage certificate recovery';
--> statement-breakpoint
UPDATE profiles SET data = jsonb_set(data, '{workIntro}', to_jsonb('A look at document-related services and practical problem-solving, with birth, death, and marriage certificate previews.'::text)), updated_at = now() WHERE id = 1 AND data->>'workIntro' = 'A look at document-related services and practical problem-solving. All previews are illustrative samples, never personal records.';
