import { create } from 'zustand'

type Props = {
	posts: Post[]
	setPosts: (newPosts: Post[]) => void
}

const useFeedPosts = create<Props>(set => ({
	posts: [],
	setPosts: (newPosts: Post[]) => set({ posts: newPosts })
}))

export default useFeedPosts
