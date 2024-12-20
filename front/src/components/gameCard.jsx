function GameCard()
{
    return (
        <div className="hidden lg:block">
          <div className="glass-card aspect-square max-w-lg mx-auto">
            <div className="bg-neutral-900 rounded-lg aspect-[4/3] mb-4 relative overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full border-dashed border-2 border-white/10 flex">
                  <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-dashed border-white/10"></div>
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-16 bg-white rounded-full animate-float"></div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-16 bg-white rounded-full animate-float"></div>
                  <div className="absolute w-3 h-3 bg-white rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-float"></div>
                  <div className="absolute top-4 left-0 right-0 flex justify-center gap-8 text-2xl font-mono">
                    <span className="text-white/80">0</span>
                    <span className="text-white/80">0</span>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-mono mb-2">Ping Pong</h3>
            <p className="text-muted-foreground">
              Challenge players worldwide in real-time matches. Climb the
              leaderboard and become the ultimate champion.
            </p>
          </div>
        </div>
      );

}

export default GameCard;