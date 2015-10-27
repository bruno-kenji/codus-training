class WrongNumberOfPlayersError < StandardError ; end
class NoSuchStrategyError < StandardError ; end

def rps_game_winner(game)
    raise WrongNumberOfPlayersError unless game.length == 2
    player1_strategy = game[0][1].upcase
    player2_strategy = game[1][1].upcase
    raise NoSuchStrategyError unless ["R", "S", "P"].include?(player1_strategy)
    raise NoSuchStrategyError unless ["R", "S", "P"].include?(player2_strategy)

    if ( player1_strategy == player2_strategy ) 
        return game[0]
    end
    if ( player1_strategy == "R" )
    	if ( player2_strategy == "S" )
        	return game[0]
        else 
        	return game[1]
        end
    elsif ( player1_strategy == "S" )
    	if ( player2_strategy == "P" )
    		return game[0]
    	else
    		return game[1]
    	end
    else
    	if ( player2_strategy == "R" )
    		return game[0]
    	else
    		return game[1]
    	end
    end
end

def rps_tournament_winner(tournament)
	champion = tournament[0][1]
	if (champion.length == 1)
		return rps_game_winner(tournament)
	else
		return rps_game_winner([rps_tournament_winner(tournament[0]), rps_tournament_winner(tournament[1])])
	end
end

tournament = [
        [ 
          [
            ["Armando", "P"], ["Dave", "S"]
          ],
          [
            ["Richard", "P"], ["Michael", "R"]
          ],
        ],
        [
          [
            ["Allen", "S"], ["Omer", "P"]
          ],
          [
            ["David E.", "R"], ["Richard X.", "R"]
          ]
        ]
      ]
puts "#{rps_tournament_winner(tournament)} is the tournament winner"