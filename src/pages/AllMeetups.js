import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meet-up',
        image: 'https://i.guim.co.uk/img/media/8b7e358faa1c36cbf493fc00bcf32d2fe17e6718/0_486_6000_3600/master/6000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a4d1e375b3fd774886870aaf7e700a11',
        address: '152, Wallstreet, Meetup City',
        description: 'This is the first meetup which you definitely should not miss'
    },
    {
        id: 'm2',
        title: 'This is a second meet-up',
        image: 'https://i.insider.com/604f3420fea127001886ac05?width=700',
        address: '312, Herbert Macauley Way Sabo, Meetup City',
        description: 'This is the second meetup which you definitely should not miss'
    }
];

function AllMeetupsPage(){
    return (
        <section>
            <h1>All Meetups page</h1>
            <MeetupList meetups={DUMMY_DATA}/>

        </section>
    )
}
export default AllMeetupsPage;