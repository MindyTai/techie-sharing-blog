'use client';

import { Navbar } from '@/components/Navbar';
import { TagFilter } from '@/components/TagFilter';
import { tags } from '@/lib/data';
import { useState } from 'react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagSelect = (tagId: string) => {
    setSelectedTags((prev) =>
      prev.includes(tagId)
        ? prev.filter((id) => id !== tagId)
        : [...prev, tagId]
    );
  };

  return (
    <main>
      <Navbar onSearch={setSearchQuery} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Latest Articles</h1>
        <TagFilter
          tags={tags}
          selectedTags={selectedTags}
          onTagSelect={handleTagSelect}
        />
      </div>
    </main>
  );
}
