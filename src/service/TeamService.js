
export default class TeamService {

    getTeamMemberships() {
		return [
			{
				user: "Sorin",
				team1: true,
				team2: false,
				team3: true
			},{
				teamName: "Team 1",
				user: "Sorin",
				isMember: true
			}

		];
	}

	
}