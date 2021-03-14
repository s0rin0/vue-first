import TeamService from '../../service/TeamService';


export default {
  name: 'Table',
  components: {

  },
  data() {
    return {
      teams: null,
      userMemberships: null
    }
  },
  teamService: null,
  created() {
    this.teamService = new TeamService();

    this.teams = [
      { name: "Team 1", id: "t-1" },
      { name: "Team 2", id: "t-2" },
      { name: "Team 3", id: "t-3" },
      { name: "Team 4", id: "t-4" }
    ];

    this.userMemberships = [
      {
        userId: "u-1", userName: "Name 1",
        memberships: { "t-1": true, "t-2": false, "t-3": true, "t-4": true }
      },
      {
        userId: "u-2", userName: "Name 2",
        memberships: { "t-1": false, "t-2": false, "t-3": false, "t-4": true }
      },
      {
        userId: "u-3", userName: "Name 3",
        memberships: { "t-1": false, "t-2": false, "t-3": true, "t-4": false }
      }

    ];
  },
  methods: {
    onChangeMembership(value) {
      console.log("Changed ");
    }
  }
}