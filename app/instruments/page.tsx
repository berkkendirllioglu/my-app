import React from "react";
import { createClient } from "@/utils/supabase/server";

export default async function page() {
  const supabase = await createClient();
  const { data: instruments, error } = await supabase.from("instruments").select();
  return (
    <div>
        <p>{JSON.stringify(instruments,null,2)}</p>
        <p>Error: {JSON.stringify(error)}</p>
    </div>
  );
}
