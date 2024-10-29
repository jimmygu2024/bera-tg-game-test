import ResourceItem from '@/components/ResourceItem/ResourceItem';
const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <ResourceItem
                title="Boost"
                level={2}
                coins={13400}
                total={23450}
            />
        </div>
    );
}

export default Home;