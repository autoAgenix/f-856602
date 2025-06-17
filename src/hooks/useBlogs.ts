
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Blog {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  image_url: string | null;
  tags: string[] | null;
  category: string | null;
  read_time: string | null;
  publish_date: string;
  author: string | null;
  created_at: string;
  updated_at: string;
}

export const useBlogs = () => {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('publish_date', { ascending: false });
      
      if (error) throw error;
      return data as Blog[];
    },
  });
};

export const useBlog = (id: string) => {
  return useQuery({
    queryKey: ['blog', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data as Blog;
    },
    enabled: !!id,
  });
};
