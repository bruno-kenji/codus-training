class WrongNumberOfPlayersError < StandardError ; end
class NoSuchStrategyError < StandardError ; end

def result_generator(player1, player2, game)
  if ( player1 == player2 ) 
        return "#{game[0]} wins, since #{game[0][1]} = #{game[1][1]}"
    end
    if ( player1 == "R" )
      if ( player2 == "S" )
          return ( "#{game[0]} wins, since #{game[0][1]} > #{game[1][1]}" )
        else 
          return ( "#{game[1]} wins, since #{game[0][1]} < #{game[1][1]}" )
        end
    elsif ( player1 == "S" )
      if ( player2 == "P" )
        return ( "#{game[0]} wins, since #{game[0][1]} > #{game[1][1]}" )
      else
        return ( "#{game[1]} wins, since #{game[0][1]} < #{game[1][1]}" )
      end
    else
      if ( player2 == "R" )
        return ( "#{game[0]} wins, since #{game[0][1]} > #{game[1][1]}" )
      else
        return ( "#{game[1]} wins, since #{game[0][1]} < #{game[1][1]}" )
      end
    end
end

def rps_game_winner(game)
    raise WrongNumberOfPlayersError unless game.length == 2
    player1_strategy = game[0][1].upcase
    player2_strategy = game[1][1].upcase
    raise NoSuchStrategyError unless ["R", "S", "P"].include?(player1_strategy)
    raise NoSuchStrategyError unless ["R", "S", "P"].include?(player2_strategy)
    result_generator( player1_strategy, player2_strategy, game )
end

game = [ [ "Armando", "P" ], [ "Dave", "R" ] ]

puts rps_game_winner(game)