-- Add the supplied portrait without changing any other saved profile fields.
UPDATE profiles
SET data = jsonb_set(data, '{imageUrl}', '"/images/ferdous-mahmud-portrait.webp"'::jsonb),
    updated_at = now()
WHERE id = 1;
