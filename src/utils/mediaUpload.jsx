import { createClient } from "@supabase/supabase-js";
const anonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNla2h2eXhqYWJ2am9vem93c2drIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUyNjE1NDksImV4cCI6MjA5MDgzNzU0OX0.0NbF1v00ZjvyByHXPl5XakoMLJmK3sBRGzeBgXfl24c";

const supabaseUrl = "https://sekhvyxjabvjoozowsgk.supabase.co";

const supabase = createClient(supabaseUrl, anonKey);

export default function MediaUpload(file) {
  return new Promise((resolve, reject) => {
    if (file == null) {
      reject("No file provided");
    } else {
      const timestamp = new Date().getTime();
      const fileName = timestamp + file.name;
      supabase.storage
        .from("images")
        .upload(fileName, file, {
          upsert: false,
          cacheControl: "3600",
        })
        .then(() => {
          const publicUrl = supabase.storage
            .from("images")
            .getPublicUrl(fileName).data.publicUrl;
          resolve(publicUrl);
        })
        .catch(() => {
          reject("An error occured");
        });
    }
  });
}
